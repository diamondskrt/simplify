import { storageApi } from '~/shared/api';
import { supabaseClient } from '~/shared/lib';

const profileApi = {
  async deleteAvatar(userId: string): Promise<void> {
    const { data: files } = await supabaseClient.storage.from('avatars').list(userId);

    if (files && files.length > 0) {
      const paths = files.map((file) => `${userId}/${file.name}`);
      await storageApi.deleteFile('avatars', paths);
    }
  },

  async uploadAvatar(userId: string, file: Blob): Promise<string> {
    const fileExt = file.type.split('/')[1] || 'jpg';
    const filePath = `${userId}/avatar.${fileExt}`;

    await storageApi.uploadFile('avatars', filePath, file);
    return storageApi.getPublicUrl('avatars', filePath);
  },
};

export { profileApi };
