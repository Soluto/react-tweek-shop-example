import {createTweekContext} from 'react-tweek';
import {createTweekClient, VersionWatcher} from 'tweek-client';
import {TweekRepository} from 'tweek-local-cache';
import config from './config.json';

const baseServiceUrl = config.TweekUrl;

const tweekClient = createTweekClient({baseServiceUrl});
const tweekRepo = new TweekRepository({
  client: tweekClient,
  context: {
    user: {
      id: 'Jaime',
    },
  },
});

// experimental - for hot reloading
const tweekWatcher = new VersionWatcher(baseServiceUrl, 500);
tweekWatcher.subscribe(() => tweekRepo.expire());
//

export default createTweekContext(tweekRepo);
