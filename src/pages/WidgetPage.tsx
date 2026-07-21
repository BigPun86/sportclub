/**
 * Standalone-Seite für die iframe-Einbettung auf sckw.de.
 * Route: /widget  ->  https://partner.sckw.de/widget
 *
 * Kein Navigation-Header, transparenter Hintergrund, damit das Carousel
 * sich nahtlos in jede Wix-Sektion einfügt.
 */

import styled, { createGlobalStyle } from "styled-components";
import SponsoringCarousel from "../components/SponsoringCarousel";

const WidgetGlobal = createGlobalStyle`
  :root,
  html,
  body,
  #root {
    margin: 0;
    padding: 0;
    min-height: 0;
    background: transparent !important;
    /* Dark-Mode-Canvas verhindern - sonst malt der Browser eine schwarze
       Fläche hinter den transparenten Body statt durchscheinen zu lassen */
    color-scheme: light;
    text-align: left;
  }
`;

const Frame = styled.div`
  padding: 0;
  display: flex;
  justify-content: center;
`;

export default function WidgetPage() {
  return (
    <>
      <WidgetGlobal />
      <Frame>
        <SponsoringCarousel />
      </Frame>
    </>
  );
}
