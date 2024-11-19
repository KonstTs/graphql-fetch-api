import { GraphQLObjectType } from 'graphql';
import {defaultOptions as defo} from './defaults';
import {mergeObjects} from './utils';

export const provideQLtype = (_type) => new GraphQLObjectType(_type);

export const provideQLquery = (_query) => new GraphQLObjectType(_query);

export const provideRequest = (_url:string, _options?:any) => {
    if(!_url) return;
    const abc = new AbortController();
    return new Request(_url, {...mergeObjects(structuredClone(defo), _options ?? {}), signal: abc.signal});
};

export const fetchQL = (request) => fetch(request);
