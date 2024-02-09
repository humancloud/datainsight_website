import { Stack, Typography, Box, Button } from "@mui/material";
import React from "react";
import Home5FeaturesCollect from "./Home5FeaturesCollect";
import {
  styleTypography1,
  styleTypography2,
  styleTypography3,
  individualStyles,
} from "./Home5FeaturesStyle";
import { useNavigate } from "react-router-dom";
function Home5Featuresdata({ ids, backgrounds, heights }) {
  const navigate = useNavigate();
  const styleBox1 = {
    backgroundColor: backgrounds,
    borderRadius: "40px",
    width: "459px",
    height: heights,
  };
  return (
    <>
      {Home5FeaturesCollect.filter((items) => items.id === ids).map(
        (items, index) => (
          <Box key={index} sx={styleBox1}>
            <Stack
              direction={"column"}
              spacing={4}
              sx={{
                width: "100%",
                height: "554px",
              }}
            >
              <Box sx={{ width: "400px", height: "220px", marginTop: "10px" }}>
                <Box sx={{ position: "relative" }}>
                  <img
                    src={items.img1}
                    alt="images"
                    style={{
                      ...individualStyles[items.id]?.img1,
                      position: "absolute",
                      // zIndex: 3,
                    }}
                  />
                  <img
                    src={items.img2}
                    alt="images"
                    style={{
                      ...individualStyles[items.id]?.img2,
                      position: "absolute",
                    }}
                  />
                  <img
                    src={items.img3}
                    alt="images"
                    style={{
                      ...individualStyles[items.id]?.img3,
                      position: "absolute",
                    }}
                  />
                </Box>
              </Box>
              <Stack
                direction={"column"}
                alignItems={"center"}
                justifyContent={"center"}
                spacing={2}
              >
                <Typography sx={styleTypography1}>{items.title}</Typography>
                <Typography sx={styleTypography2}>{items.desc}</Typography>
                <Button onClick={() => navigate("/features")}>
                  <Typography sx={styleTypography3}>{items.read}</Typography>
                </Button>
              </Stack>
            </Stack>
          </Box>
        )
      )}
    </>
  );
}

export default Home5Featuresdata;
