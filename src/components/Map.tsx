import { useEffect, useRef } from "react";
import H from "@here/maps-api-for-javascript";

export default function Map(props: any) {
  const mapRef: any = useRef(null);
  const map: any = useRef(null);
  const platform: any = useRef(null);
  const apikey = "Paqs5O35N6CBDAwoTAigiOZfzq-1WqCcSsHg84gkQ04";

  useEffect(() => {
    if (!map.current) {
      platform.current = new H.service.Platform({ apikey });
      const rasterTileService = platform.current.getRasterTileService({
        queryParams: {
          style: "explore.day",
          size: 512,
        },
      });
      const rasterTileProvider = new H.service.rasterTile.Provider(rasterTileService);
      const rasterTileLayer = new H.map.layer.TileLayer(rasterTileProvider);
      const newMap = new H.Map(mapRef.current!, rasterTileLayer, {
        pixelRatio: window.devicePixelRatio,
        center: {
          lat: 64.144,
          lng: -21.94,
        },
        zoom: 14,
      });
      const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(newMap));
      map.current = newMap;
    }
  }, [apikey]);

  return <div style={{ width: "100%", height: "500px" }} ref={mapRef} />;
}
