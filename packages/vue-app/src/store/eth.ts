import {
  Module, VuexModule, MutationAction,
} from 'vuex-module-decorators'
import { Web3Provider } from '@ethersproject/providers'

@Module({
  namespaced: true,
})
export default class Eth extends VuexModule {
  userAddress = ''

  userBalance = '0'

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

  @MutationAction({ mutate: ['userBalance'] })
  async setUserBalance(provider: Web3Provider, address: string) {
    if (provider && address) {
      const balance = (await provider.getBalance(address)).toString()
      return { userBalance: balance }
    }

    return { userBalance: '0' }
  }
}
