import { createSlice } from '@reduxjs/toolkit';

const ModalStage = {
    CREATE_NEW_ETH: 'CREATE_NEW_ETH',
    CONNECT_NEW_ETH: 'CONNECT_NEW_ETH',
    SUCCESS_NEW_ETH: 'SUCCESS_NEW_ETH',
    ENTER_NEW_ETH: 'ENTER_NEW_ETH',
    CONNECT_NEW_SOLANA: 'CONNECT_NEW_SOLANA',
    SUCCESS_NEW_SOLANA: 'SUCCESS_NEW_SOLANA',
    CLAIN_NEW_NFT: 'CLAIN_NEW_NFT',
    HOLDS_NO_NFT: 'HOLDS_NO_NFT',
    // OLD SOLANA
    OLD_SOLANA: 'OLD_SOLANA',
    CONNECT_OLD_SOLANA: 'CONNECT_OLD_SOLANA',
    MINT_FOR_FREE: 'MINT FOR FREE',
    ONE_FREE: 'ONE_FREE',
    IS_NOT_WHITELIST: 'IS_NOT_WHITELIST',
    MINT_MORE: 'MINT MORE',
    FINISH_X: 'FINISH_X',
    PAID_MINT: 'PAID_MINT',
    PAID_MINT_OK: 'PAID_MINT_OK'
};

const initialState = {
    stage: null,
};

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        setModalStage(state, action) {
            state.stage = action.payload;
            console.log(state.stage)
        },
        resetModalState(state) {
            state.stage = null;
        },
    },
});

export const { setModalStage, resetModalState } = modalSlice.actions;
export { ModalStage };
export default modalSlice.reducer;
