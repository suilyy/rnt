import {NavigationContainer, Page} from './Navigation';
import {GiftedChatExample} from './GiftedChatExample';
import {GiftedChatExample1} from './GiftedChatExample1';
import {GiftedChatExample2} from './GiftedChatExample2';
import {GiftedChatExample3} from './GiftedChatExample3';
import {GiftedChatExample4} from './GiftedChatExample4';
import {GiftedChatExample5} from './GiftedChatExample5';
import {GiftedChatExample6} from './GiftedChatExample6';
import {GiftedChatExample7} from './GiftedChatExample7';
import {GiftedChatExample8} from './GiftedChatExample8';

export const GiftedChatDemo = () => {
    return (
            <NavigationContainer>
              <Page name="GiftedChatExample">
                <GiftedChatExample />
              </Page>
  
              <Page name="GiftedChatExample1">
                <GiftedChatExample1 />
              </Page>
              
              <Page name="GiftedChatExample2">
                <GiftedChatExample2 />
              </Page>
  
              <Page name="GiftedChatExample3">
                <GiftedChatExample3 />
              </Page>
  
              <Page name="GiftedChatExample4">
                <GiftedChatExample4 />
              </Page>
  
              <Page name="GiftedChatExample5">
                <GiftedChatExample5 />
              </Page>
  
              <Page name="GiftedChatExample6">
                <GiftedChatExample6 />
              </Page>
  
              <Page name="GiftedChatExample7">
                <GiftedChatExample7 />
              </Page>
  
              <Page name="GiftedChatExample8">
                <GiftedChatExample8 />
              </Page>
            </NavigationContainer>
    )
  }

