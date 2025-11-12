export interface IIdpService<T> {
    getUserInfo(accessToken: string): Promise<T>;   
}