import express from 'express';
import { Server } from '@overnightjs/core';
import compression from 'compression';
import helmet from 'helmet';
import cors from 'cors';

export class SampleServer extends Server {
  constructor() {
    super();
    this.addMiddlewares();
  }

  addMiddlewares() {
    this.app.use(compression());
    this.app.use(helmet());
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
  }

  public start(port: number | string) {
    this.app.listen(port, () => console.log(`Server listening on *:${port}`));
  }
}
