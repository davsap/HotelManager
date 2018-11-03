import { HotelDashboardModule } from './hotel-dashboard.module';

describe('HotelDashboardModule', () => {
  let hotelDashboardModule: HotelDashboardModule;

  beforeEach(() => {
    hotelDashboardModule = new HotelDashboardModule();
  });

  it('should create an instance', () => {
    expect(hotelDashboardModule).toBeTruthy();
  });
});
