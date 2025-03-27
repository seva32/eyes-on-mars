import * as React from 'react'

export const FontLoader: React.FC = () => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html:
          '<link href=&quot;https://fonts.googleapis.com/css2?family=Inter&display=swap&quot; rel=&quot;stylesheet&quot;>',
      }}
    />
  )
}
