Welcome
===================

A simple tool to manage composition of Higher Order Component

There are only two functions:
1. compose, which to compose another HoC
2. export, when the component has already been composed and ready to be rendered.

> **How to Use:**

    const Hello = props => (         
     <div> Hello World </div>
    )
    
    export default ComposeHoC(Hello)
                     .compose()
                     .compose()
                     .export()
