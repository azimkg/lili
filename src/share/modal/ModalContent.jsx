import React from 'react';
import { useSelector } from 'react-redux';
import { ModalStage } from '../../store/modalSlice';
import ModalInitial from '../../components/modalcontent/ModalInitial';
import CreateNewEth from '../../components/modalcontent/CreateNewEth';
import ConnectNewSolana from '../../components/modalcontent/ConnectNewEth';
import ConnectSuccesEth from '../../components/modalcontent/ConnectSuccesEth';
import FieldEthInput from '../../components/modalcontent/FieldEthInput';
import ConnnectNewSolana from '../../components/modalcontent/ConnnectNewSolana';
import ConnectSuccessSolana from '../../components/modalcontent/ConnectSuccessSolana';
import ClaimNewNft from '../../components/modalcontent/ClaimNewNft';
import AgreeOld from '../../components/modalcontent/AgreeOld';
import Finish from '../../components/modalcontent/Finish';
import ConnectOldSolana from '../../components/modalcontent/ConnectOldSolana';
import ConnectSuccessOld from '../../components/modalcontent/ConnectSuccessOld';
import FreeMint from '../../components/modalcontent/FreeMint';
import StartSoon from '../../components/modalcontent/StartSoon';
import MintMore from '../../components/modalcontent/MintMore';
import PaidMaint from '../../components/modalcontent/PaidMaint';
import PaintMintOk from '../../components/modalcontent/PaintMintOk';

const ModalContent = () => {
    const stageModal = useSelector(state => state.modal.stage);
    console.log(stageModal)
    switch (stageModal) {
        case ModalStage.CREATE_NEW_ETH:
            return <CreateNewEth />;
        case ModalStage.CONNECT_NEW_ETH:
            return <ConnectNewSolana />;
        case ModalStage.SUCCESS_NEW_ETH:
            return <ConnectSuccesEth />;
        case ModalStage.ENTER_NEW_ETH:
            return <FieldEthInput />;
        case ModalStage.CONNECT_NEW_SOLANA:
            return <ConnnectNewSolana />;
        case ModalStage.SUCCESS_NEW_SOLANA:
            return <ConnectSuccessSolana />;
        case ModalStage.CLAIN_NEW_NFT:
            return <ClaimNewNft />;
        case ModalStage.HOLDS_NO_NFT:
            return <AgreeOld />;
        case ModalStage.FINISH_X:
            return <Finish />;
        case ModalStage.OLD_SOLANA:
            return <ConnectOldSolana />;
        case ModalStage.CONNECT_OLD_SOLANA:
            return <ConnectSuccessOld />;
        case ModalStage.MINT_FOR_FREE:
            return <FreeMint />;
        case ModalStage.ONE_FREE:
            return <StartSoon />;
        case ModalStage.MINT_MORE:
            return <MintMore />;
        case ModalStage.PAID_MINT:
            return <PaidMaint />;
        case ModalStage.PAID_MINT_OK:
            return <PaintMintOk />;
        default:
            return <ModalInitial />;
    }
};

export default ModalContent;