/* @flow */
import React from "react"
import classNames from "classnames"

import type {SpanArgs} from "../../state/Search/types"
import brim from "../../brim"

export default function SpanDuration({spanArgs}: {spanArgs: SpanArgs}) {
  let span = brim.span(spanArgs)
  let error = !span.isValid()
  return (
    <div className={classNames("span-duration", {error})}>
      <hr />
      <span>{error ? "!!!" : span.shortFormat()}</span>
      <hr />
    </div>
  )
}
