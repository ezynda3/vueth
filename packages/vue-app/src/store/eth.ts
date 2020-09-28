import {
  Module, VuexModule, MutationAction, Mutation, Action,
} from 'vuex-module-decorators'
import { Web3Provider } from '@ethersproject/providers'

@Module({
  namespaced: true,
  name: 'eth',
})
export default class Eth extends VuexModule {
    userAddress = ''

    @MutationAction({ mutate: ['userAddress'] })
    async setUserAddress(provider: Web3Provider) {
      let address = ''
      if (provider) {
        const signer = provider.getSigner()
        if (signer) {
          address = await signer.getAddress()
        }
      }
      return { userAddress: address }
    }
}
