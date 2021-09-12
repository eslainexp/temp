import React from 'react';

import { Image } from 'semantic-ui-react'

export interface IArweaveData {
  readonly name?: string,
  readonly symbol?: string,
  readonly description?: string,
  readonly external_url?: string,
  readonly image?: string,
  // readonly properties?: {
  //   readonly category?: string,
  // }
  readonly seller_fee_basis_points?: number
}

interface IProps {
  readonly arweave: IArweaveData
}

export const CardView = (props: React.PropsWithChildren<IProps>
  ) => {
    const { arweave } = props
  return (
    <div className="w-full lg:w-8/12 xl:w-8/12 px-4">
      <div className="relative flex flex-col min-w-0 break-words bg-white rounded-lg mb-6 xl:mb-0 shadow-md drop-shadow-md md:drop-shadow-xl">
        <div className="flex-auto p-4">
          <div className="flex flex-wrap">
            <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
              <span className="font-semibold text-xl text-blueGray-700">
              {arweave?.name ?? ''}
              </span>
            </div>
          </div>
        <p className="text-sm text-blueGray-400 mt-4">
          {arweave?.image && (<Image src={`${arweave?.image}`} wrapped ui={true}/>)}
          {arweave?.description ?? ''}
        </p>
        </div>
      </div>
    </div>
  );
};
