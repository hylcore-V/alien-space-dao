import './home.css'
// import background from "../../assets/Home/galaxyEarthMilkyWay.jpg";
import alienbook from '../../assets/Home/alienbook.webp'
import Button from '../../components/button'
import {
  StartIcon,
  DeFiICon,
  DeSciIcon,
  GameFiIcon,
  ReFiIcon,
  AcademyIcon,
  ClubIcon,
  CoNetWorkingIcon,
  ContactIcon,
  LockIcon
} from './utils'
import threeRelation from '../../../src/assets/Home/3-relationship.webp'
import complexRelation from '../../../src/assets/Home/complex-relation.webp'
import academy from '../../../src/assets/Home/academy.webp'
import club from '../../../src/assets/Home/club.webp'
import conetwork from '../../../src/assets/Home/conetwork.webp'
import btcImg from '../../../src/assets/Home/section-02/btc-jpg.jfif'
import BlockchainImg from '../../../src/assets/Home/section-02/Blockchain-jpg.webp'
import ACoinJpgImg from '../../../src/assets/Home/section-02/ACoin-jpg.webp'
import CardanoImg from '../../../src/assets/Home/section-03/Cardano-jpg.jfif'
import CosmosImg from '../../../src/assets/Home/section-03/Cosmos-jpg.jfif'
import ethereumImg from '../../../src/assets/Home/section-03/ethereum.png'
import orgImg from '../../../src/assets/Home/section-03/org-jpg.jfif'
import polygonImg from '../../../src/assets/Home/section-03/polygonm-jpg.jfif'
import xmrImg from '../../../src/assets/Home/section-03/xmr-jpg.jfif'

import background from '../../assets/Home/background.png'

import { Link } from 'react-router-dom'

function Landing () {
  return (
    <main>
      <section aria-label='sec-hero'>
        <div className='inner-container'>
          <h1 className='mb-24 font-atomic font-bold text-[72px] text-green'>
            ΔlieπFlΦw$pac€ D∆Φ
          </h1>
          <div className='items-center gap-x-4 gap-y-4 grid grid-cols-5 w-fit'>
            <Button className='flex justify-center items-center gap-x-4 btn-border-gradient w-40'>
              <DeFiICon
                size={20}
                className='flex-[0_0_auto] hover:fill-white fill-green'
              />
              DeFi
            </Button>
            <Button className='flex justify-center items-center gap-x-4 btn-border-gradient w-40'>
              <DeFiICon
                size={20}
                className='flex-[0_0_auto] hover:fill-white fill-green'
              />
              DeFi
            </Button>
            <Button className='flex justify-center items-center gap-x-4 btn-border-gradient w-40'>
              <DeFiICon
                size={20}
                className='flex-[0_0_auto] hover:fill-white fill-green'
              />
              DeFi
            </Button>
            <Button className='flex justify-center items-center gap-x-4 btn-border-gradient w-40'>
              <DeFiICon
                size={20}
                className='flex-[0_0_auto] hover:fill-white fill-green'
              />
              DeFi
            </Button>
            <Button className='flex justify-center items-center gap-x-4 btn-border-gradient w-40'>
              <DeFiICon
                size={20}
                className='flex-[0_0_auto] hover:fill-white fill-green'
              />
              DeFi
            </Button>
            <Button className='flex justify-center items-center gap-x-4 btn-border-gradient w-40'>
              <DeFiICon
                size={20}
                className='flex-[0_0_auto] hover:fill-white fill-green'
              />
              DeFi
            </Button>
            <Button className='flex justify-center items-center gap-x-4 btn-border-gradient w-40'>
              <DeFiICon
                size={20}
                className='flex-[0_0_auto] hover:fill-white fill-green'
              />
              DeFi
            </Button>
            <Button className='flex justify-center items-center gap-x-4 btn-border-gradient w-40'>
              <DeFiICon
                size={20}
                className='flex-[0_0_auto] hover:fill-white fill-green'
              />
              DeFi
            </Button>
            <Button className='flex justify-center items-center gap-x-4 btn-border-gradient w-40'>
              <DeFiICon
                size={20}
                className='flex-[0_0_auto] hover:fill-white fill-green'
              />
              DeFi
            </Button>
            <Button className='flex justify-center items-center gap-x-4 btn-border-gradient w-40'>
              <DeFiICon
                size={20}
                className='flex-[0_0_auto] hover:fill-white fill-green'
              />
              DeFi
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Landing
