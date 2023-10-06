import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
        <meta name="description" content="Somos uma instituição sem fins lucrativos que visa levar transformação de vidas através de projetos solidários a fim de unir forças entre o setor publico, privado e comunidades com propósito de promover projetos de capacitação e investimento em cada pessoa até que ela tenha o domínio de sua própria vida." />
        <meta property="og:url" content="https://sarandocarapicuiba.org/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Associação Sarando Carapicuíba"/>
        <meta property="og:description" content="Somos uma instituição sem fins lucrativos que visa levar transformação de vidas através de projetos solidários a fim de unir forças entre o setor publico, privado e comunidades com propósito de promover projetos de capacitação e investimento em cada pessoa até que ela tenha o domínio de sua própria vida."/>
        <meta property="og:image" content="https://sarandocarapicuiba.org/voluntarios.webp"/>

        <meta name="twitter:card" content="summary_large_image"/>
        <meta property="twitter:domain" content="sarandocarapicuiba.org"/>
        <meta property="twitter:url" content="https://sarandocarapicuiba.org/"/>
        <meta name="twitter:title" content="Associação Sarando Carapicuíba"/>
        <meta name="twitter:description" content="Somos uma instituição sem fins lucrativos que visa levar transformação de vidas através de projetos solidários a fim de unir forças entre o setor publico, privado e comunidades com propósito de promover projetos de capacitação e investimento em cada pessoa até que ela tenha o domínio de sua própria vida."/>
        <meta name="twitter:image" content="https://sarandocarapicuiba.org/voluntarios.webp"/>

      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
