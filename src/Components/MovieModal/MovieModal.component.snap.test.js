import React from 'react';
import renderer from 'react-test-renderer';
import MovieModal from './MovieModal.component';

jest.mock('antd', () => ({
	Modal: 'ModalComponent',
	Image: 'ImageComponent'
}));

test('Render Movie Modal Component', () => {
	const props = {
		item: {
			Title: 'Batman',
			Poster: 'batman.png'
		},
		show: true,
		onClose: jest.fn()
	};
	const component = renderer.create(
		<MovieModal {...props} />,
	);
	const tree = component.toJSON();

	expect(tree).toMatchSnapshot();
});
