interface ChildProps {
    color: string;
    onClick?: () => void; //function being passed in by the Parent.
    //Could (should) be defined here. As done in #ChildWithChildren below!
}

interface ChildPropsWithChildren extends ChildProps {
    children: any
}

//Syntax#1. Works. But: Doesnt tell the tsx that this is a React Component.
//              e.g. Child.DisplayName is not found e.g. could be another lib using jsx.
//              
export const Child = ({ color, onClick }: ChildProps) => {
    return <div>
        Hi In Child: {color}
        <button onClick={onClick}>ClickMe</button>
    </div>
};

//Syntax#2. Better : We know it as a React component. So displayName etc. works
export const ChildAsFC: React.FC<ChildProps> = ({ color, onClick }) => {
    return <div>
        Hi In ChildAsFC: {color}
        <button onClick={onClick}>ClickMe</button>
    </div>
};

const defaultOnClick = () => {
    console.log("#defaultOnClick Clicked ChildWithChildren");
}

//Syntax#3. Best. Using React.FC is discouraged. Add children explicitly in the props if so required! 
export const ChildWithChildren = ({ color, children }: ChildPropsWithChildren) => {
    return <div>
        Hi In ChildAsJsxElement: {color}
        Has Children: {children}
        <button onClick={defaultOnClick}>ClickMe</button>
    </div>
};
