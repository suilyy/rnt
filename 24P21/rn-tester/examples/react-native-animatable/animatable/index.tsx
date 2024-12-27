
import { NavigationContainer, Page } from "./navitagiton"
import AnimatableExample from './AnimatableExample';
import AnimatableExample2 from './AnimatableExample2';
import AnimatableExample3 from './AnimatableExample3';


export const AnimatableExampleDemo = () => {
  return (
          <NavigationContainer>

            <Page name="AnimatableExample">
              <AnimatableExample />
            </Page>

            <Page name="AnimatableExample2">
              <AnimatableExample2 />
            </Page>
            
            <Page name="AnimatableExample3">
              <AnimatableExample3 />
            </Page>

          </NavigationContainer>
  )
}