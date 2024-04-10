export enum AppRoute {
  Root = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
  NotFound = '/*',
}

export enum APIRoute {
  Login = '/login',
  Logout = '/logout',
  Offers = '/offers',
  Nearby = '/nearby',
  Favorite = '/favorite',
  Reviews = '/comments',
}

export enum APIStatus {
  Idle = 'idle',
  Loading = 'loading',
  Succeeded = 'succeeded',
  Failed = 'failed',
}

export enum AuthorizationStatus {
  Auth = 'Auth',
  NoAuth = 'NoAuth',
  Unknown = 'Unknown',
}

export enum NameSpace {
  Offers = 'offers',
  Reviews = 'reviews',
  User = 'user',
  City = 'city',
}

export enum SortOption {
  LowToHigh = 'Price: low to high',
  HighToLow = 'Price: high to low',
  TopRated = 'Top rated first',
}

export enum ToastMessage {
  ISE = 'Internal Server Error!',
  SomethingWrong = 'Oops... Something went wrong. Please try again.',
}

export enum ToastId {
  Login = 'login',
  Comment = 'comment',
}
