import { ProfileResponse } from '../../../interface/profile-data.interface';

export const modifyProfile = (profileState: ProfileResponse, profileForm) => {
  return {
    ...profileState,
    ...profileForm
  };
}

