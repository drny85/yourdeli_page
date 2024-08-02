'use client'
import {  useSearchParams } from "next/navigation"
import { useEffect } from "react"

export default function DeepLinking() {
    const params = useSearchParams()
    console.log(params.get('linking'))

    useEffect(() => {
        if (params.get('linking')){
            window.location.replace(params.get('linking') as string)
        }
       
    }, [])
    
  return null
}
