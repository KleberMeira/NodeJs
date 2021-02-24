import Queue from 'bull';
import redisConfig from '../../config/redis'

import RegistrationMail from '../jobs/RegistrationMain'

//É preciso um nome. Foi usada a chave do RegistrationMail.
//e dps parametros das configurações do Redis

const mailQueue = new Queue(RegistrationMail.key, redisConfig);

export default mailQueue;