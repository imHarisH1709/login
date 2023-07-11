import React from "react";
import * as Components from './Components';

function App() {
    const [Registration, toggle] = React.useState(true);
     return(
        <center>
        <div classname="hi">
         <Components.Container>
             <Components.SignUpContainer signinIn={Registration}>
                 <Components.Form>
                 </Components.Form>
             </Components.SignUpContainer>

             <Components.SignInContainer signinIn={Registration}>
                  <Components.Form>
                      <Components.Title>SIGN IN</Components.Title>
                      <Components.Input type='type' placeholder='UserName' />
                      <Components.Input type='email' placeholder='Email' />
                      <Components.Input type='password' placeholder='Password' />
                      <Components.Anchor href='#'></Components.Anchor>
                      <Components.Button>LOGIN</Components.Button>
                  </Components.Form>
             </Components.SignInContainer>

             <Components.OverlayContainer signinIn={Registration}>
                 <Components.Overlay signinIn={Registration}>

                 <Components.LeftOverlayPanel signinIn={Registration}>
                     <Components.Title>Welcome !</Components.Title>
                     <Components.Paragraph>
                         Enter Your personal details and start journey with us
                     </Components.Paragraph>
                     <Components.GhostButton onClick={() => toggle(true)}>
                         Sign In
                     </Components.GhostButton>
                     </Components.LeftOverlayPanel>

                     <Components.RightOverlayPanel signinIn={Registration}>
                       <Components.Title>Hello Employee!</Components.Title>
                       <Components.Paragraph>
                           To keep connected with us please login with your personal info

                       </Components.Paragraph>
                            
                     </Components.RightOverlayPanel>
 
                 </Components.Overlay>
             </Components.OverlayContainer>

         </Components.Container>
         </div>
         </center>
     )
}

export default App;