var classNames = require('classnames');

module.exports = {
	CAROUSEL (isSlider) {
		return classNames({
			"carousel": true,
			"carousel-slider": isSlider
		});
	}, 

	WRAPPER (isSlider) {
		return classNames({
			"thumbs-wrapper": !isSlider,
			"slider-wrapper": isSlider
		});
	},

	SLIDER (isSlider, isSwiping){
		return classNames({
			"thumbs": !isSlider,
			"slider": isSlider,
			"swiping": isSwiping
		});
	},

	ITEM (isSlider, index, selectedItem) {
		return classNames({
			"thumb": !isSlider,
			"slide": isSlider,
			"selected": index === selectedItem
		});
	},

	ARROW_LEFT (disabled) {
		return classNames({
			"control-arrow control-left": true,
			"control-disabled": disabled
		});
	},

	ARROW_RIGHT (disabled) {
		return classNames({
			"control-arrow control-right": true,
			"control-disabled": disabled
		})
	},

	DOT (selected) {
		return classNames({
			"dot": true,
			'selected': selected
		})
	}
}