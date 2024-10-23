import { render,screen } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem"

describe( 'Probando el <GifItem/>', () => {


    const title = 'Saitama';
    const url = 'https://on-punch.com/saitma'

    test('Debe de hacer match con el snapshot', () => {

        const {container} = render( <GifItem title={title} url={url}/> )

        expect( container ).toMatchSnapshot();

    });

    test( 'Debe mostar la img con el URL y el ALT indicado', () => {
        
        render( <GifItem title={title} url={url}/> )

        screen.debug()
        /*    
        expect( screen.getByRole('img').alt ).toBe( title )
        expect( screen.getByRole('img').alt ).toBe( title )
        */

        const { src, alt } = screen.getByRole('img');

        expect( src ).toBe( url );
        expect( alt ).toBe( alt );

    } )

} )