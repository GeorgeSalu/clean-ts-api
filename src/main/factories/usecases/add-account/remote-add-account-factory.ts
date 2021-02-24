import { makeApiUrl } from '@/main/factories/http/api-http-client-factory'
import { makeAxiosHttpClient } from '@/main/factories/http/axios.http-client-facotry'
import { AddAccount } from '@/domain/usecases'
import { RemoteAddAccount } from '@/data/usecases/add-account/remote-add-account'

export const makeRemoteAddAccount = (): AddAccount => {
  return new RemoteAddAccount(makeApiUrl('/signup'), makeAxiosHttpClient())
}
