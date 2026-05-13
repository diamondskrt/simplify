import { supabaseClient } from '~/shared/lib';

const storageApi = {
  async deleteFile(bucket: string, paths: string[]) {
    const { error } = await supabaseClient.storage.from(bucket).remove(paths);
    if (error) throw error;
  },

  getPublicUrl(bucket: string, path: string) {
    const { data } = supabaseClient.storage.from(bucket).getPublicUrl(path);
    return data.publicUrl;
  },

  async uploadFile(bucket: string, path: string, file: Blob | File) {
    const { error } = await supabaseClient.storage
      .from(bucket)
      .upload(path, file, { upsert: true });
    if (error) throw error;
  },
};

export { storageApi };
