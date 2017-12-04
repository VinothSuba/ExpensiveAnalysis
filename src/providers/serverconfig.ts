import { Injectable } from '@angular/core';

@Injectable()
export class Configuration {
    public Server = 'http://localhost:53349/';
    public ApiUrl = 'v1/';
    public ServerWithApiUrl = this.Server + this.ApiUrl;
    public GetUserUrl = this.ServerWithApiUrl +"getuser";
}