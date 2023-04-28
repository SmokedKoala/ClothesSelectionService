import { ChangeDetectionStrategy, Component, Inject, Injector } from '@angular/core';
import { bottomClothesValues, footwearValues } from '@shared/consts/clothes-select-values';
import { TuiDialogService } from '@taiga-ui/core';
import { UploadedImageUrlService } from '@modules/upload/uploaded-image-url.service';
import { DEFAULT_COLOR } from '@shared/consts/possible-colors-palette';
import { SelectedColorsService } from '@core/services/selected-colors.service';
import { SelectedCityService } from '@core/services/selected-city.service';
import { SelectedClothesService } from '@core/services/selected-clothes.service';

@Component({
  selector: 'cls-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchResultsComponent {
  imageUrl: string | null = null;

  protected readonly footwearValues = footwearValues;
  protected readonly bottomClothesValues = bottomClothesValues;

  readonly DEFAULT_COLOR = DEFAULT_COLOR;

  constructor(
    readonly selectedColorsService: SelectedColorsService,
    readonly selectedClothesService: SelectedClothesService,
    readonly selectedCityService: SelectedCityService,
    @Inject(TuiDialogService) private readonly dialogService: TuiDialogService,
    @Inject(Injector) private readonly injector: Injector,
    private readonly uploadedImageUrlService: UploadedImageUrlService) {
    this.imageUrl = this.uploadedImageUrlService.imageUrl;
  }
}
