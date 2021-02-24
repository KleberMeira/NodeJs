import 'dotenv/config';

import Queue from './app/lib/Queue';

import RegistrationMail from './app/jobs/RegistrationMain'

Queue.process(RegistrationMail.handle);