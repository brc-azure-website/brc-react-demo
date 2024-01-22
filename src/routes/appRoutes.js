import HomePage from "../pages/home/HomePage";
import ChangelogPage from "../pages/changelog/ChangelogPage";
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import DocumentationPage from "../pages/documentation/DocumentationPage";
import MangaPageLayout from "../pages/manga/MangaPageLayout";
import ChromeReaderModeIcon from '@mui/icons-material/ChromeReaderMode';
import SearchMangaPage from "../pages/manga/SearchMangaPage";
import MangaListPage from "../pages/manga/MangaListPage";

const appRoutes = [
  {
    index: true,
    element: <HomePage />,
    state: "home"
  },
  {
    path: "/manga",
    element: <MangaPageLayout />,
    state: "manga",
    sidebarProps: {
      displayText: "Manga",
      icon: <ChromeReaderModeIcon />
    },
    child: [
      {
        path: "/manga/search",
        element: <SearchMangaPage />,
        state: "manga.search",
        sidebarProps: {
          displayText: "Wyszukaj"
        },
      },
      {
        path: "/manga/list",
        element: <MangaListPage />,
        state: "manga.list",
        sidebarProps: {
          displayText: "Lista Mang"
        }
      }
    ]
  },
  {
    path: "/documentation",
    element: <DocumentationPage />,
    state: "documentation",
    sidebarProps: {
      displayText: "Dokumentacja",
      icon: <ArticleOutlinedIcon />
    }
  },
  {
    path: "/changelog",
    element: <ChangelogPage />,
    state: "changelog",
    sidebarProps: {
      displayText: "Dziennik zmian",
      icon: <FormatListBulletedOutlinedIcon />
    }
  }
];

export default appRoutes;