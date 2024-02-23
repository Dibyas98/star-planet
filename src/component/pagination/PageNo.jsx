import React, { useContext } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { store } from '../../Data';

export default function PageNo() {
  const { page,nextPage,prevPage } = useContext(store);

  return (
    <div className='page'>
      <ChevronLeft onClick={()=> prevPage()}/>
      <span>{page}</span>
      <ChevronRight onClick={() => nextPage()} />
    </div>
  );
}
