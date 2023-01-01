import 'dotenv/config';

import { SampleServer } from './server';

const server = new SampleServer();

const serverPort = process.env.SERVER_PORT || 8080;

server.start(serverPort);
