import {ChunkManager} from '@callstack/repack/client';
import AsyncStorage from '@react-native-async-storage/async-storage';

ChunkManager.configure({
  storage: AsyncStorage,

  // Resolve URL from where to download a chunk.
  resolveRemoteChunk: async chunkId => {
    // You can fetch remote config or obtain a base URL dynamically.

    return {
      // Retrun a URL to a chunk
      //   url: `https://domain.exaple/apps/${chunkId}`,
      url: ``,
    };
  },
});
