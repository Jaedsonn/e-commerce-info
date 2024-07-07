import React from 'react';

type Props = {
  price: number;
};

const Order = ({price}: Props) => {
  return (
    <div className='bg-[#CBE8CA] sm:min-h-[80%] border-[1px] border-black flex'>
      <div className='flex flex-col justify-between'>
        <p className='text-left justify-self-end'> Resumo do Pedido</p>
        <p className=' font-bold text-right'>R${price.toFixed(2)}</p>
        <button> BOTÃO </button>
        </div>
      </div>
        
      

  );
};

export default Order;
