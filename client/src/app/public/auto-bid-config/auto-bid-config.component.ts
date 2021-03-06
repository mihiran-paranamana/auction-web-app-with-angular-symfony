import {AfterViewInit, Component, OnDestroy} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {SnackbarService} from '../../services/snackbar/snackbar.service';
import {ItemService} from '../../services/item/item.service';
import {AutoBidConfig} from '../../interfaces/auto-bid-config';
import {Observable, Subscription} from 'rxjs';
import {ConfigService} from '../../services/config/config.service';
import {EventListenerService} from '../../services/event-listener/event-listener.service';
import {CommonService} from '../../services/common/common.service';

@Component({
  selector: 'app-auto-bid-config',
  templateUrl: './auto-bid-config.component.html',
  styleUrls: ['./auto-bid-config.component.sass']
})
export class AutoBidConfigComponent implements AfterViewInit, OnDestroy {

  title = 'Auto Bid Configurations';
  submitButtonLabel = 'Save';
  autoBidConfig$!: Observable<AutoBidConfig>;
  subscriptionEventSaveEmit?: Subscription;
  subscriptionEventFailureEmit?: Subscription;

  private autoBidConfig: AutoBidConfig = {
    id: undefined,
    maxBidAmount: 0,
    currentBidAmount: 0,
    notifyPercentage: 0
  };

  constructor(
    private formBuilder: FormBuilder,
    private itemService: ItemService,
    private configService: ConfigService,
    private snackbarService: SnackbarService,
    private eventListenerService: EventListenerService,
    private commonService: CommonService
  ) {
    this.subscribeForEvents();
  }

  autoBidConfigForm = this.formBuilder.group({
    maxBidAmount: [0, this.commonService.getCurrencyInputValidators()],
    notifyPercentage: [100, this.commonService.getPercentageInputValidators()],
    isAutoBidEnabled: [false],
    accessToken: [localStorage.getItem('accessToken')]
  });

  ngAfterViewInit(): void {
    this.fetchAutoBigConfig();
  }

  ngOnDestroy(): void {
    this.subscriptionEventSaveEmit?.unsubscribe();
    this.subscriptionEventFailureEmit?.unsubscribe();
  }

  fetchAutoBigConfig(): void {
    const url = localStorage.getItem('serverUrl') + '/autoBidConfig?accessToken=' + localStorage.getItem('accessToken');
    this.autoBidConfig$ = this.itemService.getItem(url);
    this.configService.getAutoBidConfig(url)
      .subscribe(autoBidConfig => {
        this.autoBidConfig = autoBidConfig;
        this.updateAutoBidConfigForm();
        this.checkForBidAlertNotifications();
      });
  }

  updateAutoBidConfigForm(): void {
    this.autoBidConfigForm = this.formBuilder.group({
      maxBidAmount: [this.autoBidConfig.maxBidAmount, this.commonService.getCurrencyInputValidators()],
      notifyPercentage: [this.autoBidConfig.notifyPercentage, this.commonService.getPercentageInputValidators()],
      isAutoBidEnabled: [this.autoBidConfig.isAutoBidEnabled],
      accessToken: [localStorage.getItem('accessToken')]
    });
  }

  checkForBidAlertNotifications(): void {
    // @ts-ignore
    const maxBidAmount = parseFloat(this.autoBidConfig.maxBidAmount);
    // @ts-ignore
    const currentBidAmount = parseFloat(this.autoBidConfig.currentBidAmount);
    // @ts-ignore
    const notifyPercentage = parseFloat(this.autoBidConfig.notifyPercentage);
    if (maxBidAmount > 0 && currentBidAmount > 0) {
      if (maxBidAmount <= currentBidAmount) {
        this.onMaxBidAmountReached();
      } else {
        if (
          notifyPercentage &&
          (maxBidAmount * notifyPercentage / 100) <= currentBidAmount
        ) {
          this.onMaxBidAmountPercentageReached(notifyPercentage);
        }
      }
    }
  }

  subscribeForEvents(): void {
    this.subscriptionEventSaveEmit = this.eventListenerService.eventSaveEmit$.subscribe(autoBidConfig => {
      this.onSaved(autoBidConfig);
    });
    this.subscriptionEventFailureEmit = this.eventListenerService.eventFailureEmit$.subscribe(error => {
      this.onFailure(error);
    });
  }

  onSave(): void {
    const url = localStorage.getItem('serverUrl') + '/autoBidConfig';
    this.configService.saveAutoBidConfig(url, this.autoBidConfigForm.value)
      .subscribe();
  }

  onSaved(autoBidConfig: AutoBidConfig): void {
    this.fetchAutoBigConfig();
    this.snackbarService.openSnackBar('Configuration Saved Successfully!');
  }

  onFailure(error: any): void {
    this.snackbarService.openSnackBar('Request Failed!');
  }

  onMaxBidAmountReached(): void {
    this.snackbarService.openSnackBarNotification(
      'Warning: Maximum bid amount has been reached & auto-bidding process stopped. Please increase the maximum bid amount to continue.'
    );
  }

  onMaxBidAmountPercentageReached(notifyPercentage: number): void {
    const message = 'Warning: ' + notifyPercentage + '% of the maximum bid amount is reserved!';
    this.snackbarService.openSnackBarNotification(message);
  }

  getBidUsagePercentage(autoBidConfig: AutoBidConfig): number|string {
    // @ts-ignore
    const maxBidAmount = parseFloat(autoBidConfig.maxBidAmount);
    // @ts-ignore
    const currentBidAmount = parseFloat(autoBidConfig.currentBidAmount);
    if (currentBidAmount && maxBidAmount) {
      const percentage = currentBidAmount * 100 / maxBidAmount;
      return percentage.toFixed(2);
    } else {
      return 0;
    }
  }
}
