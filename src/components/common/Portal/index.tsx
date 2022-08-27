import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

type TProps = {
  id?: string;
  children: React.ReactNode;
};

const Portal = ({ id, children }: TProps) => {
  const portalDOMRef = useRef<HTMLDivElement | null>(null);
  const [isPortalMounted, setIsPortalMounted] = useState(false);
  // 동적으로 노드 생성
  useEffect(() => {
    const element = document.createElement("div");
    element.id = id ?? "portal";
    document.body.appendChild(element);
    portalDOMRef.current = element;
    setIsPortalMounted(true);

    return () => {
      const mountedElement = portalDOMRef.current as HTMLDivElement;
      mountedElement.parentElement!.removeChild(mountedElement);
      portalDOMRef.current = null;
      setIsPortalMounted(false);
    };
  }, [id]);

  if (!isPortalMounted) return null;
  // 포탈 생성
  return createPortal(children, portalDOMRef.current!);
};

export default Portal;
