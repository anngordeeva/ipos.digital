import '../styles/style.scss'
import '../styles/fonts.scss'
import '../styles/global.scss'
import '../styles/variables.scss'

function selectTitle() {
  const buttonSelectTitle = document.getElementById('dropdown-one')
  const list = document.getElementById('list')
  let listTitle = document.getElementById('list-title')
  let title = document.getElementById('title')

  buttonSelectTitle.addEventListener('click', function() {
    this.classList.toggle('active')
  })
  list.addEventListener('click', function(event) {
    let newTitle = event.target.innerText
    title.textContent = newTitle
    listTitle.textContent = newTitle
    listTitle.classList.add('selected')
  })
}

function popup() {
  const buttonPopup = document.getElementById('dropdown-two')
  const popupList = document.getElementById('popup-list')
  let popuplistTitle = document.getElementById('popup-title')

  buttonPopup.addEventListener('click', function() {
    this.classList.toggle('active')
  })
  popupList.addEventListener('click', function(event) {
    let newPopupTitle = event.target.innerText
    popuplistTitle.textContent = newPopupTitle
    popuplistTitle.classList.add('selected')
    alert(newPopupTitle)
  })

}

selectTitle()
popup()