export function formatDivPopover (div) {
  div.style.display = 'inline-block'
  div.style.paddingLeft = '20px'
}

export function formatQuestionPopover (question) {
  question.style.borderRadius = '16px'
  question.style.color = '#fff'
  question.style.display = 'inline-block'
  question.style.height = '20px'
  question.style.position = 'relative'
  question.style.textAlign = 'center'
  question.style.width = '20px'
  question.style.backgroundColor = '#a0a0a0'
}

export function formatPopover (popover) {
  popover.style.borderRadius = '5px'
  popover.style.bottom = '42px'
  popover.style.boxShadow = '1px 1px 1px 1px rgba(0, 0, 0, 0.15)'
  popover.style.left = '-95px'
  popover.style.padding = '7px 10px'
  popover.style.position = 'absolute'
  popover.style.width = '200px'
  popover.style.zIndex = '4'
  popover.style.display = 'none'
  popover.style.fontWeight = 'normal'
}

export function formatPopoverText (popoverText) {
  popoverText.style.color = '#000'
  popoverText.style.textAlign = 'justify'
}
