import React, { FC, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useRouter } from 'next/router'



const HomePages:FC = props => {

  const router = useRouter();
  const [ beer, setBeer ] = useState<any[]>([]);

useEffect(() => {
  if(!router.isReady){ 
    return;
   }
   setBeer([,,])
}, [router.query, router.isReady])

  if(!beer.length){ 
    return <h1> cargando</h1>
  }

  return (
    <div>HomePages</div>
  )
}

HomePages.propTypes = {

}

export default HomePages