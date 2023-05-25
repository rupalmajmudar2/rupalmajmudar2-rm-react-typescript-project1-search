//Curly braces for a named-export rather than a default-export
//Bcos we want to have multiple versions of Child component in Child.tsx
import { Child, ChildAsFC, ChildWithChildren } from './Child';

const Parent = () => {
    return (
        <div>
            Own Parent stuff
            <Child color="red" onClick={() => console.log("Clicked Child")} />
            {/*-<Child //-> error: children do not exist!
                color="red" onClick={() => console.log("Clicked Child")}>
                abcpqr which comes as a part of the children
                But the ChildProps interface does not include children.
              </Child>*/
            }
            <ChildAsFC color="blue" onClick={() => console.log("Clicked ChildAsFC")} />

            <ChildWithChildren color="green">
                abc pqr
                rst tuv
                <div>another child in div</div>
            </ChildWithChildren>
        </div>
    );
};

export default Parent;