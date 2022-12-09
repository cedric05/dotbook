import { Uri } from "vscode";
export interface Headers {
    [key: string]: string
}

export interface Response {
    contentType?: string;
    headers: Headers | undefined;
    body: string;
    status: number;
    url: string;
    output_file?: string;
}


export interface NotebookExecutionMetadata {
    target: string;
    date: string;
    uri: Uri,
    cellNo: number;
    executionTime: string;
}

export interface DothttpExecuteResponse {

    filenameExtension?: string,
    headers: Headers;
    body: string;
    status: number;
    url: string;
    response: Response;
    http: string;
    error?: boolean;
    error_message?: string;
    script_result?: ScriptResult
    history?: Array<DothttpRedirectHistory>
}

export type Method =
    | 'get' | 'GET'
    | 'delete' | 'DELETE'
    | 'head' | 'HEAD'
    | 'options' | 'OPTIONS'
    | 'post' | 'POST'
    | 'put' | 'PUT'
    | 'patch' | 'PATCH'
    | 'purge' | 'PURGE'
    | 'link' | 'LINK'
    | 'unlink' | 'UNLINK'


export interface DothttpRedirectHistory {
    status: number,
    method: Method,
    url: string,
    headers: Headers
}

export interface ScriptResult {
    stdout: string;
    error: string;
    properties: { [propname: string]: string };
    tests: Test[];
    compiled: boolean;
}



export interface Test {
    name: string;
    success: boolean;
    result: string;
    error: string,
}


export enum MessageType {
    save,
    generate
}