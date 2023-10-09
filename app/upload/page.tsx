'use client'
import React from 'react'
import { CldUploadWidget, CldImage } from 'next-cloudinary'

interface CloudinaryResult {
  public_id: string
}

const UploadPage = () => {
  const [pulicId, usePublicId] = React.useState('')

  return (
    <>
      {pulicId && (
        <CldImage src={pulicId} width={270} height={180} alt="Whatever" />
      )}
      <CldUploadWidget
        uploadPreset="oh6htxdc"
        onUpload={(result, widget) => {
          if (result.event !== 'success') return
          const info = result.info as CloudinaryResult
          usePublicId(info.public_id)
        }}
        options={{
          sources: ['local'],
          multiple: false
        }}
      >
        {({ open }) => (
          <button className="btn btn-primary" onClick={() => open()}>
            Upload
          </button>
        )}
      </CldUploadWidget>
    </>
  )
}

export default UploadPage
