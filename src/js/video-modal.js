const playBtn = document.getElementById( 'play-btn' );
playBtn.addEventListener( 'click', (e) => {
	e.preventDefault();
	const videoModal = document.getElementById( 'video-popup-modal' );
	videoModal.classList.remove( 'close-video-modal' );
} );

const closeBtn = document.getElementById( 'close-btn' );
closeBtn.addEventListener( 'click', (e) => {
	e.preventDefault();
	const videoModal = document.getElementById( 'video-popup-modal' );
	videoModal.classList.add( 'close-video-modal' );
} );