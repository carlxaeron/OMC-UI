export const mapping = [
  {
    "path": "/",
    "metadata": {
      "title": "Home",
      "description": "Welcome to the Home page"
    }
  },
  {
    "path": "#",
    "metadata": {
      "title": "Missionaries",
      "description": ""
    },
    "children": [
      {
        "path": "/missionaries/index",
        "metadata": {
          "title": "Missionaries",
          "description": ""
        }
      },
      {
        "path": "/missionaries/support",
        "metadata": {
          "title": "Support Missionaries",
          "description": ""
        }
      },
      {
        "path": "/missionaries/find-by-location",
        "metadata": {
          "title": "Find Missionaries By Location",
          "description": ""
        }
      },
      {
        "path": "/missionaries/find-by-group",
        "metadata": {
          "title": "Find Missionaries By Group",
          "description": ""
        }
      },
    ],
  },
];