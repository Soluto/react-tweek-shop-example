import {createTweekContext} from 'react-tweek';
import {createTweekClient, VersionWatcher} from 'tweek-client';
import {TweekRepository} from 'tweek-local-cache';
import config from './config.json';

const baseServiceUrl = config.TweekUrl;

const tweekClient = createTweekClient({baseServiceUrl});
const tweekRepo = new TweekRepository({client: tweekClient});

/*
tweekRepo.context = {
  user: {
    id: "john"
  }
};
*/

// experimental - for hot reloading
const tweekWatcher = new VersionWatcher(baseServiceUrl);
tweekWatcher.subscribe(() => tweekRepo.expire());
//

export default createTweekContext(tweekRepo);
