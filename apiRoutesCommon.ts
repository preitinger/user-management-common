
export type ApiResp<MySuccessResp> = MySuccessResp | {
    type: 'error';
    error: string;
}
